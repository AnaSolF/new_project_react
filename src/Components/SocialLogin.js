import styles from "@/styles/Login.module.css";
import Image from "react-bootstrap/Image";
import { app } from "@/Firebase/InitConfig";
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import Button from "react-bootstrap/Button";
import { Nav } from "react-bootstrap";
import { useRouter } from 'next/router'


export default function SocialLogin() {
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter("")

  function doLogin(provider) {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((credentials) => {
        const user = credentials.user;
        if (user) {
          router.push('/Profile') 
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }
  
  return (
    <><div className={styles.nav}>
      <Button
        onClick={() => doLogin(googleProvider)}
        className={styles.btnNav}
        variant="outline-dark"
        color="black"
      >
        <Image
          src="/icons8-logo-de-google-94.png"
          width={"20px"}
          style={{ marginRight: "15px" }}
        />
        {"Continuar con Google"}
      
      </Button>
      </div> 
      <div className={styles.nav}>
        <Button className={styles.btnNav}
          href="/Register" variant="outline-dark"
          color="white">
          <Image
            src="icons8-usuario-48.png"
            width={"20px"}
            style={{ marginBottom: "5px", marginRight: "12px" }}
          />
      {"Ingresar con Email"}
        </Button>
      </div>
    </>
  );
}