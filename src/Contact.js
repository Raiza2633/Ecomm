import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">contact page</h2>


      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62220.536387435684!2d79.2398096022312!3d12.921630417409132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad367adb322b9f%3A0xbf691d88c8571092!2sMelvisharam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1667400877588!5m2!1sen!2sin"
        width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


      <div className="container">
        <div className="contact-form">
          <form
            className="contact-inputs"
            action="https://formspree.io/f/mvoyvvln"
            method="POST">
            <input type="text" placeholder="username"
              name="username" required
              autoComplete="off"
              
            />

            <input type="email" name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            
            />

            <textarea name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter your message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>

  )


};

export default Contact;