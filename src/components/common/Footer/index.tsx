import { footer } from "../../../data/nav/footer";
import TranslatedText from '../TranslatedText/TranslatedText';

function Footer() {
  return (
    <footer className="bg-white py-10 px-4 text-sm text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Contact Info */}
        <div className="space-y-1">
          <p>
            <TranslatedText text={footer.phoneNumber} />
          </p>
          <p>
            <TranslatedText text={footer.fax} />
          </p>
          <p>
            <TranslatedText text={footer.email} />
          </p>
          <p>
            <TranslatedText text={footer.address} />
          </p>
        </div>

        {/* Column 2: Legal Info */}
        <div className="space-y-1">
          <p>
            <TranslatedText text={footer.pib} />
          </p>
          <p>
            <TranslatedText text={footer.number} />
          </p>
          <p>
            <TranslatedText text={footer.account} />
          </p>
        </div>

        {/* Column 3: Socials and Footer Text */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4">
            {footer.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500 text-center md:text-right">
            <TranslatedText text={footer.footerString} />
          </p>
          <p className="text-xs text-gray-500 text-center md:text-right">
            <TranslatedText text={footer.footerCreatedBy} />
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
