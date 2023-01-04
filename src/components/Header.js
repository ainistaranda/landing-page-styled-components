import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.style";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>Build the Community Your Fans Will Love</h1>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
              dicta blanditiis iste modi consequuntur sequi optio nostrum, aut
              dolorum nisi culpa provident? Laborum iste natus delectus eveniet
              sapiente dignissimos numquam!
            </p>
            <Button bg="#ff0099" color="white">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
