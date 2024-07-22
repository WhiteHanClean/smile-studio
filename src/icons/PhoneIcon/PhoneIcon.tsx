import React from "react";

interface iconProps {
  width?: string;
  height?: string;
}

const PhoneIcon = ({width, height}: iconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="vuesax/linear/call">
        <g id="call">
          <g id="call_2">
            <path
              id="Vector"
              d="M16.9776 13.7475C16.9776 14.0175 16.9176 14.295 16.7901 14.565C16.6626 14.835 16.4976 15.09 16.2801 15.33C15.9126 15.735 15.5076 16.0275 15.0501 16.215C14.6001 16.4025 14.1126 16.5 13.5876 16.5C12.8226 16.5 12.0051 16.32 11.1426 15.9525C10.2801 15.585 9.41762 15.09 8.56262 14.4675C7.70012 13.8375 6.88262 13.14 6.10262 12.3675C5.33012 11.5875 4.63262 10.77 4.01012 9.915C3.39512 9.06 2.90012 8.205 2.54012 7.3575C2.18012 6.5025 2.00012 5.685 2.00012 4.905C2.00012 4.395 2.09012 3.9075 2.27012 3.4575C2.45012 3 2.73512 2.58 3.13262 2.205C3.61262 1.7325 4.13762 1.5 4.69262 1.5C4.90262 1.5 5.11262 1.545 5.30012 1.635C5.49512 1.725 5.66762 1.86 5.80262 2.055L7.54262 4.5075C7.67762 4.695 7.77512 4.8675 7.84262 5.0325C7.91012 5.19 7.94762 5.3475 7.94762 5.49C7.94762 5.67 7.89512 5.85 7.79012 6.0225C7.69262 6.195 7.55012 6.375 7.37012 6.555L6.80012 7.1475C6.71762 7.23 6.68012 7.3275 6.68012 7.4475C6.68012 7.5075 6.68762 7.56 6.70262 7.62C6.72512 7.68 6.74762 7.725 6.76262 7.77C6.89762 8.0175 7.13012 8.34 7.46012 8.73C7.79762 9.12 8.15762 9.5175 8.54762 9.915C8.95262 10.3125 9.34262 10.68 9.74012 11.0175C10.1301 11.3475 10.4526 11.5725 10.7076 11.7075C10.7451 11.7225 10.7901 11.745 10.8426 11.7675C10.9026 11.79 10.9626 11.7975 11.0301 11.7975C11.1576 11.7975 11.2551 11.7525 11.3376 11.67L11.9076 11.1075C12.0951 10.92 12.2751 10.7775 12.4476 10.6875C12.6201 10.5825 12.7926 10.53 12.9801 10.53C13.1226 10.53 13.2726 10.56 13.4376 10.6275C13.6026 10.695 13.7751 10.7925 13.9626 10.92L16.4451 12.6825C16.6401 12.8175 16.7751 12.975 16.8576 13.1625C16.9326 13.35 16.9776 13.5375 16.9776 13.7475Z"
              fill="white"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PhoneIcon;
