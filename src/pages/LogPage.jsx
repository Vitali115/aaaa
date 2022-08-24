import React from "react";
import "../styles.scss";

import Button from "react-bootstrap/Button";

export default function LogPage() {
  return (
    <>
      <section style={{ display: "flex" }}>
        <div>
          {/* <img src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" /> */}
        </div>

        <div>
          <img src="https://svgur.com/i/jBS.svg" />

          <h1>Post your Voice</h1>
          <h3>Iscriviti adesso a AudioPost.</h3>
          <div>
            <Button>Accedi con google</Button>
            <br />
            <Button>Iscriviti con Apple</Button>
            <br />

            <span>O</span>
            <br />
            <Button>Iscriviti tramite numero o email</Button>
            <p>
              Iscrivendoti accetti i Termini di servizio e l'Informativa sulla
              privacy, incluso l'Utilizzo dei cookie.
            </p>
          </div>
          <h4>Hai già un account?</h4>

          <Button>Accedi</Button>
        </div>
      </section>
      <section>
        <p>
          Chi siamo- Centro assistenza - Termini di servizio - Informativa sulla
          privacy - Norme sui cookie - Accessibilità - Info sugli annunci - Blog
          - Status - Lavora con noi - Risorse del brand - Pubblicità - Marketing
          - Twitter per le aziende - Sviluppatori - Elenco - Impostazioni - ©
          2022 AudioPost S.r.l.
        </p>
      </section>
    </>
  );
}
