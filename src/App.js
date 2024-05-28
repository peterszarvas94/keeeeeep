import { useForm } from "./src";
import Headers from "./Header";
import "./styles.css";
import { useEffect, useState } from "react";

let renderCount = 0;

export default function App() {
  const [showButton, setShowButton] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { dirtyFields, isDirty }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  renderCount++;

  console.log("dirtyFields", dirtyFields);
  console.log("isDirty", isDirty);

  return (
    <div>
      <Headers
        renderCount={renderCount}
        description="Performant, flexible and extensible forms with easy-to-use validation."
      />

      <p>
        New API Reset: <code>keepDirtyValues</code>
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First Name" />
        <input readOnly {...register("lastName")} placeholder="Last Name" />

        <button
          onClick={() => {
            setTimeout(() => {
              reset(
                {
                  firstName: "bill",
                  lastName: "luo"
                },
                { keepDirtyValues: true }
              );
              setShowButton(true);
            }, 3000);
          }}
          type="button"
        >
          Start fetch
        </button>

        {showButton && (
          <button
            type="button"
            onClick={() => {
              reset();
            }}
          >
            Reset to server state
          </button>
        )}

        <input type="submit" />
      </form>
    </div>
  );
}
