import { Oval } from "react-loader-spinner";
import { Loader } from "./Loader.styled";


export const Spinner = () => {
    return (
      <Loader className="spinner">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </Loader>
    );
  };
