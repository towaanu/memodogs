import styles from "./Badge.module.css";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Badge({ className, children }: Props) {
  return <div className={`${styles["badge"]} ${className}`}> {children}</div>;
}

export default Badge;
