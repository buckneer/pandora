import { useState, useEffect } from "react";
import {
    Firestore,
    doc,
    getDoc,
    DocumentData,
    DocumentReference,
} from "firebase/firestore";

interface FirestoreDocHook<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
    refresh: () => Promise<void>;
}

export function useFirestoreDocById<T extends DocumentData>(
    db: Firestore,
    collectionName: string,
    docId: string | null
): FirestoreDocHook<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        if (!docId) {
            setData(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        try {
            const docRef = doc(db, collectionName, docId) as DocumentReference<T>;
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setData({ ...docSnap.data(), id: docSnap.id });
                setError(null);
            } else {
                setData(null);
                setError(new Error("Document does not exist"));
            }
        } catch (err) {
            setError(err as Error);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [docId]);

    return { data, loading, error, refresh: fetchData };
}
