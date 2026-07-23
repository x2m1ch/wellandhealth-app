import mail from "/contacts-us/contacts/mail.svg";
import phone from "/contacts-us/contacts/phone.svg";
import fax from "/contacts-us/contacts/fax.svg";
import address from "/contacts-us/contacts/address.svg";

import "./styles/contacts.css";

interface Info {
  heading: "Email" | "Phone" | "Fax" | "Address";
  body: string;
}

const CONTACTS: Info[] = [
  {
    heading: "Email",
    body: "yourcompany@email.com",
  },
  {
    heading: "Phone",
    body: "+1 (123) 456-7893",
  },
  {
    heading: "Fax",
    body: "(123) 456-6782",
  },
  {
    heading: "Address",
    body: "US",
  },
];

export const Contacts = () => {
  return (
    <section className="contacts">
      <h2>Get in touch anytime</h2>
      <section>
        {CONTACTS.map((contact) => (
          <article className="contact">
            <h3>{contact.heading}</h3>
            <section>
              <img
                src={
                  contact.heading == "Email"
                    ? mail
                    : contact.heading == "Phone"
                      ? phone
                      : contact.heading == "Address"
                        ? address
                        : fax
                }
                alt=""
              />
              <p>{contact.body}</p>
            </section>
          </article>
        ))}
      </section>
    </section>
  );
};
