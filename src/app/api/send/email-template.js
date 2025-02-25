import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import React from "react";

export const EmailTemplate = ({ name = "" }, lang) => (
  <Html>
    <Head />
    <Preview>Thank you for reaching out</Preview>
    <Body style={main}>
      <Container style={container}>
        <Hr style={global.hr} />
        <Section style={message}>
          <Img
            src="https://www.wocgr.com/woc-logo-bgc.svg"
            width="140"
            height="200"
            alt="illustration of John Prokopos' face"
            style={{ margin: "20px auto", paddingY: "20px" }}
          />
          <Heading style={global.heading}>
            Thank You for Reaching Out
            {name.trim() !== "" ? ", " + name + "." : "."}
          </Heading>
          <Text style={global.text}>
            Thank you for contacting us. We have received your email and
            appreciate your inquiry. One of our team members will review your
            message and reach out to you shortly. If your request is urgent,
            please feel free to contact us directly at [your contact
            information]. We appreciate your patience and look forward to
            assisting you.
          </Text>
          <Text style={global.text}>Best regards,</Text>
          <Text style={global.text}>The World of Communication Team.</Text>
        </Section>
        <Section style={paddingY}>
          <Row style={categories.container}>
            <Column align="center">
              <Link
                href="https://www.linkedin.com/in/woc"
                style={categories.text}
              >
                LinkedIn
              </Link>
            </Column>
            <Column align="center">
              <Link href="https://github.com/woc" style={categories.text}>
                GitHub
              </Link>
            </Column>
            <Column align="center">
              <Link href="https://www.facebook.com/woc" style={categories.text}>
                Facebook
              </Link>
            </Column>
            <Column align="center">
              <Link
                href="https://www.instagram.com/woc"
                style={categories.text}
              >
                Instagram
              </Link>
            </Column>
          </Row>
        </Section>
        <Hr style={{ ...global.hr, marginTop: "12px" }} />
        <Section style={paddingY}>
          <Row>
            <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
              You received this email because you contacted the WoC website. If
              you did not initiate this contact, please disregard this message.
              Alternatively, you may reach out to us directly at
              woc.com.gr@gmail.com, as replies to this email will not be
              monitored.
            </Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  },
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
    margin: "20px 10px",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  },
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const message = {
  padding: "40px 74px",
  textAlign: "center",
};

const recomendationsText = {
  margin: "0",
  fontSize: "15px",
  lineHeight: "1",
  paddingLeft: "10px",
  paddingRight: "10px",
};

const categories = {
  container: {
    width: "370px",
    margin: "auto",
    paddingTop: "12px",
  },
  text: {
    fontWeight: "500",
    color: "#000",
  },
};

const footer = {
  policy: {
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  },
};
