export default function DesktopNavbar() {
  const classes =
    "hover:border-b-2 hover:border-primary-color font-semibold text-text-color hover:text-primary-color dark:hover:text-primary-color dark:text-dark-accent-color ";
  return (
    <nav>
      <ul className="flex gap-8">
        <li>
          <a className={classes} href="#">
            About us
          </a>
        </li>
        <li>
          <a href="#" className={classes}>
            Product
          </a>
        </li>
        <li>
          <a href="#" className={classes}>
            Resource
          </a>
        </li>
        <li>
          <a href="#" className={classes}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
