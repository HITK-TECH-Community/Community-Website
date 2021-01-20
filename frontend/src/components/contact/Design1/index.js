import React from "react";
import styled from "styled-components";
import {
  Grid,
  Form,
  TextArea,
  Image,
  Button,
  Input,
  Header,
} from "semantic-ui-react";

const Contact = () => {
  return (
    <div style={{ height: "100vh", marginTop: "2rem" }}>
      <Header as="h2" textAlign="center">
        Do you have any questions?
      </Header>
      <Header as="h4" textAlign="center">
        In case you are facing any difficulty using HITK - send us a message!
      </Header>
      <StyledCardWrapper>
        <Grid>
          <Grid.Row style={{ margin: "2rem" }}>
            <Grid.Column
              style={{ backgroundColor: "#1B2431", margin: "0 1rem" }}
              computer={7}
            >
              <Image src="./images/contact_us.png" />
            </Grid.Column>

            <Grid.Column computer={8} style={{ padding: "3rem 2rem" }}>
              <Form autoComplete="off">
                <Form.Group widths="equal">
                  <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="First name"
                    placeholder="First name"
                  />
                  <Form.Field
                    id="form-input-control-last-name"
                    control={Input}
                    label="Last name"
                    placeholder="Last name"
                  />
                </Form.Group>
                <Form.Field
                  id="form-input-control-error-email"
                  label="Email"
                  control={Input}
                  width={8}
                  placeholder="joe@schmoe.com"
                />
                <Form.Field
                  id="form-textarea-control-opinion"
                  control={TextArea}
                  label="Description"
                  placeholder="Description"
                />

                <Button style={{ marginLeft: "50%" }} color="blue">
                  Submit
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </StyledCardWrapper>
    </div>
  );
};

export default Contact;

const StyledCardWrapper = styled("div")`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  padding: 0.5rem;
  margin: 2rem 2rem;
`;
