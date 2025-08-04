// Add the required props
// export const UserInfo = () => <>UserInfo markup</>;

export const UserInfo = ({ todo }) => (
  <div className="UserInfo">
    {todo.user && (
      <div className="UserInfo__user" data-cy="user">
        <strong>User:</strong> {todo.user.name}
      </div>
    )}
  </div>
);
