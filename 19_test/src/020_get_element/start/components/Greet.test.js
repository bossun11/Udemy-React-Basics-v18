import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("h1が存在するかどうか", () => {
  const { debug, container } = render(<Greet />);
  // const h1El = screen.getByText("こんにちは");
  // expect(h1El).toBeInTheDocument();

  // const radioEl = screen.getByRole("radio");
  // screen.debug(radioEl);
  // expect(radioEl).toBeInTheDocument();

  // const imgEl = screen.getByRole("img");
  // screen.debug(imgEl);
  // const imgEl = screen.getByAltText("React Logo");
  // screen.debug(imgEl);

  // const headingEl = screen.getByRole("heading", { name: "こんにちは" });
  // screen.debug(headingEl);
  // const h2El = container.querySelector("h2");
  // debug(h2El);

  // const elByLabel = screen.getByLabelText("氏名");
  // debug(elByLabel);

  // const elByPlaceholder = screen.getByPlaceholderText("氏名");
  // debug(elByPlaceholder);
});
