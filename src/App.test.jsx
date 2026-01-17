import { render, screen } from "@testing-library/react";
import App from "./App";

test("test First React app case", () => {
    render(<App/>);
    const text = screen.getByText(/hello world/i);
    const title = screen.getByTitle("abc");
    const input = screen.getByRole("textbox");
    const inputPlaceHolder = screen.getByPlaceholderText("search");

    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(inputPlaceHolder).toBeInTheDocument();
    expect(inputPlaceHolder).toHaveAttribute("name","search");
    expect(inputPlaceHolder).toHaveAttribute("type","text");
});