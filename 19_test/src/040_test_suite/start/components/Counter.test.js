import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counterコンポーネントの動作確認", () => {
  describe("初期表示の正常確認", () => {
    test("「現在のカウント」が0かどうか", () => {
      render(<Counter originCount={0} />);

      const spanEl = screen.getByText("現在のカウント:0");
      expect(spanEl).toBeInTheDocument();
    });

    test("「現在のカウント」が1かどうか", () => {
      render(<Counter originCount={1} />);

      const spanEl = screen.getByText("現在のカウント:1");
      expect(spanEl).toBeInTheDocument();
    });
  });

  describe("ボタン制御の確認", () => {
    test("「カウントアップ」押下で「現在のカウント」が+1されるか", () => {
      render(<Counter originCount={0} />);

      const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
      expect(spanElBeforeUpdate).toBeInTheDocument();

      const btn = screen.getByRole("button", { name: "カウントアップ" });
      fireEvent.click(btn);

      const spanEl = screen.getByText("現在のカウント:1");
      expect(spanEl).toBeInTheDocument();
    });

    test("「カウントダウン」押下で「現在のカウント」が-1されるか", () => {
      render(<Counter originCount={0} />);

      const spanElBeforeUpdate = screen.getByText("現在のカウント:0");
      expect(spanElBeforeUpdate).toBeInTheDocument();

      const btn = screen.getByRole("button", { name: "カウントダウン" });
      fireEvent.click(btn);

      const spanEl = screen.getByText("現在のカウント:-1");
      expect(spanEl).toBeInTheDocument();
    });

    test("「クリア」押下で「現在のカウント」が0されるか", () => {
      render(<Counter originCount={2} />);

      const spanElBeforeUpdate = screen.getByText("現在のカウント:2");
      expect(spanElBeforeUpdate).toBeInTheDocument();

      const btn = screen.getByRole("button", { name: "クリア" });
      fireEvent.click(btn);

      const spanEl = screen.getByText("現在のカウント:0");
      expect(spanEl).toBeInTheDocument();
    });
  });
});
