function Account() {
  const state = {};
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <>
      <h1>Create account</h1>
      <h3>Enter your details</h3>

      <form onsubmit={handleSubmit}>
        <label>
          Given Name:
          <input
            type="text"
            style={{ display: "block" }}
            value={state.givenName}
            onChange={handleChange}
          />
        </label>
        <label>
          Surname:
          <input
            type="text"
            style={{ display: "block" }}
            value={state.surname}
            onChange={handleChange}
          />
        </label>
        <label>
          Email address:
          <input
            type="email"
            style={{ display: "block" }}
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            style={{ display: "block" }}
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Sign up" />
      </form>
    </>
  );
}

export default Account;
