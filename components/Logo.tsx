
import React from 'react';

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <img
        className="rounded-full hidden md:block"
        width={50}
        src="https://cdn.discordapp.com/attachments/1110785495157461083/1182870705524711504/favicon.ico.jpg?ex=65864530&is=6573d030&hm=a84413a58941e340d3b3de6c99416b7df21f88c5607b1e81b6d6b49678f86525&"
        alt="logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
