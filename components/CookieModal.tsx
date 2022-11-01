import { useEffect, useRef } from "react";
import { setCookie, hasCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";

export type CookieModalProps = { privacyPage: string };

export const CookieModal: React.FC<CookieModalProps> = ({ privacyPage }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === privacyPage) {
      dialogRef.current?.close();
    } else if (!hasCookie("popup")) {
      dialogRef.current?.removeAttribute("open");
      dialogRef.current?.showModal();
    }
  });

  const closeModal = () => {
    dialogRef.current?.close();
    setCookie("popup", true);
  };

  return (
    <dialog
      onCancel={(event) => {
        event.preventDefault();
      }}
      ref={dialogRef}
    >
      <p>
        Greetings, one and all! <Link href={privacyPage}>Privacy Policy</Link>
      </p>

      <button onClick={closeModal}>OK</button>
    </dialog>
  );
};

export default CookieModal;
