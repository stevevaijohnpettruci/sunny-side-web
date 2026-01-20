export const NavItem = ({ label, href }) => {
  return (
    <a href={href} className={`"hover:text-gray-200 "  transition font-medium`}>
      {label}
    </a>
  );
};
