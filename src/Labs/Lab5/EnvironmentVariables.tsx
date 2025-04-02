const REMOTE_SERVE = import.meta.env.VITE_REMOTE_SERVER;
export default function EnvironmentVariables() {
  // Accessing environment variables in Vite
  // Note: VITE_ prefix is required for Vite to expose the variable
  return (
    <div id = "wd-environment-variables">
        <h3>Environment Variables</h3>
        <p>Remonte Server:{REMOTE_SERVE}</p>
        <hr />
    </div>
  );
}