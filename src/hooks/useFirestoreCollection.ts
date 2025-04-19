import { useState, useEffect, useCallback } from "react";
import {
    Firestore,
    collection,
    addDoc,
    getDocs,
    query,
    DocumentData,
    QueryConstraint,
    CollectionReference,
} from "firebase/firestore";

interface FirestoreCollectionHook<T> {
    data: T[] | null;
    loading: boolean;
    error: Error | null;
    add: (item: T) => Promise<void>;
    refresh: () => Promise<void>;
}

export function useFirestoreCollection<T extends DocumentData>(
    db: Firestore,
    collectionName: string,
    options?: {
        where?: QueryConstraint[];
    }
): FirestoreCollectionHook<T> {
    const [data, setData] = useState<T[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const colRef = collection(db, collectionName) as CollectionReference<T>;

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const q = options?.where ? query(colRef, ...options.where) : colRef;
            const snapshot = await getDocs(q);
            const docs = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setData(docs);
            setError(null);
        } catch (err) {
            setError(err as Error);
            setData(null);
        } finally {
            setLoading(false);
        }
    }, [collectionName]);

    const add = async (item: T) => {
        try {
            await addDoc(colRef, item);
            await fetchData();
        } catch (err) {
            setError(err as Error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, add, refresh: fetchData };
}
