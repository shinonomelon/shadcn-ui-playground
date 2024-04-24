import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <nav className="flex items-center space-x-4 mb-4 md:mb-0">
          <Link className="hover:text-gray-200 transition-colors" href="#">
            Home
          </Link>
          <Link className="hover:text-gray-200 transition-colors" href="#">
            About
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link className="hover:text-gray-200 transition-colors" href="#">
            <InstagramIcon className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-sm">
        <p>© 2024 Blog App. All rights reserved.</p>
      </div>
    </footer>
  );
}

function InstagramIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
