import { Oval } from "react-loader-spinner";

export const Spinner = () => {
    return (
      <div className="spinner">
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
      </div>
    );
  };
