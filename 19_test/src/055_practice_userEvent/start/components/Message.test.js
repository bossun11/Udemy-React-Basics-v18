import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Message from "./Message";

describe("Messageコンポーネントの動作確認", () => {
  describe("初期表示の正常性確認", () => {
    test("input要素が画面上に存在", () => {
      render(<Message />);
      const inputEl = screen.getByRole("textbox");
      expect(inputEl).toBeInTheDocument();
    });
  });

  describe("画面操作時の正常性確認", () => {
    test("input要素に値を入力すると正しく値が更新される", async () => {
      const user = userEvent.setup();
      render(<Message />);
      const inputEl = screen.getByRole("textbox");
      await user.type(inputEl, "テスト");
      expect(inputEl.value).toBe("テスト");
    });
  });
});
