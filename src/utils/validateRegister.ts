import { UsernamePasswordInput } from "src/resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
    if (!options.email.includes("@")) {
        return {
          errors: [
            {
              field: "email",
              message: "Invalid Email",
            },
          ],
        };
      }
  
      if (options.username.length <= 2) {
        return {
          errors: [
            {
              field: "username",
              message: "Length too small",
            },
          ],
        };
      }
  
      if (options.password.length <= 2) {
        return {
          errors: [
            {
              field: "password",
              message: "Weak Password",
            },
          ],
        };
      }

      return null;
};
