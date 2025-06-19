import FooterLogo from './FooterLogo';

const FooterMenus = [
  {
    title: 'Learn',
    links: [
      { name: 'FAQs', href: '#' },
      { name: 'Editorial', href: '#' },
      { name: 'Loyalty Program', href: '#' },
    ],
  },
  {
    title: 'Omarieden',
    links: [
      { name: 'About', href: '#' },
      { name: 'Discover', href: '#' },
      { name: 'Locations', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { name: 'Cookie Policy', href: '#' },
      { name: 'Privacy Statement', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Returns & Refunds', href: '#' },
    ],
  },
  {
    title: 'Follow Us',
    links: [
      { name: 'Instagram', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'Twitter / X', href: '#' },
      { name: 'Spotify', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <div className="bg-white relative lg:min-h-screen flex flex-col justify-end dark:bg-black">
      <div className="py-4 lg:py-0 lg:pt-[172px]">
        <FooterLogo />
      </div>
      <div className="p-4 lg:p-8 pt-0 flex justify-between gap-4 lg:gap-8 text-sm flex-wrap">
        {FooterMenus.map((menu, index) => (
          <div key={index} className="flex flex-col gap-1">
            <h3 className="font-display">{menu.title}</h3>
            <ul className="flex lg:flex-col gap-4 flex-wrap gap-y-1 lg:gap-1">
              {menu.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-1 w-full lg:w-auto">
          <h3 className="font-display">Updates</h3>
          <p className="max-w-[40ch]">
            Give us your email in exchange for sneak peeks of new drops, invites to Omerieden
            happenings and more.
          </p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded p-2 w["
            />
            <button
              type="submit"
              className="bg-black text-white dark:bg-white dark:text-black rounded p-2 hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
