import { footer } from "../../../data/nav/footer";

function Footer() {
  return (
    <footer className="bg-white py-10 px-4 text-sm text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Contact Info */}
        <div className="space-y-1">
          <p>{footer.phoneNumber.lat}</p>
          <p>{footer.fax.lat}</p>
          <p>{footer.email.lat}</p>
          <p>{footer.address.lat}</p>
        </div>

        {/* Column 2: Legal Info */}
        <div className="space-y-1">
          <p>{footer.pib.lat}</p>
          <p>{footer.number.lat}</p>
          <p>{footer.account.lat}</p>
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
            {footer.footerString.lat}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
