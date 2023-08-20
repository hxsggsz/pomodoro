import * as style from ".";

export const Settings = ({
  handleTheme,
}: {
  handleTheme: (color: string) => void;
}) => {
  return (
    <style.Form>
      <h2>Escolha uma cor</h2>

      <style.Options>
        <style.OptionOne
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, y: [0, -4, 4, 0] }}
          onClick={() => handleTheme("red")}
        />

        <style.OptionTwo
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, y: [0, -4, 4, 0] }}
          onClick={() => handleTheme("grey")}
        />
        <style.OptionThree
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, y: [0, -4, 4, 0] }}
          onClick={() => handleTheme("purple")}
        />
        <style.OptionFour
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, y: [0, -4, 4, 0] }}
          onClick={() => handleTheme("black")}
        />
      </style.Options>
    </style.Form>
  );
};
