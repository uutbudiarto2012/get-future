import Link from "next/link";
interface AuthProps {
  isLoggedIn?: boolean;
}
export default function Auth(props: Partial<AuthProps>) {
  const { isLoggedIn = false } = props;
  if (isLoggedIn) {
    return (
      <div className="_auth_wrapper logged-in d-none d-md-flex">
        <img src="/assets/images/team/1.png" alt="" className="img-profile" />
        <Link href="/">
          <a className="btn-profile">Uut Budia</a>
        </Link>
      </div>
    );
  }
  return (
    <Link href="/">
      <a className="btn-auth">Register</a>
    </Link>
  );
}
