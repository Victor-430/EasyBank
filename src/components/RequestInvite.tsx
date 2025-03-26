export const RequestInvite = ({ hidden = "hidden", flex = "flex" }) => {
  return (
    <div>
      <button
        className={`${hidden} rounded-3xl text-LightGray hover:bg-opacity-45 bg-gradient-to-r from-LimeGreen lg:flex to-Cyan px-10 py-3 ${flex}`}
      >
        Request Invite
      </button>
    </div>
  );
};
