type HelloProps = {
  firstName: string;
};

export default function Hello({ firstName }: HelloProps) {
  return (
    <div className="bg-gray-300 p-4 m-8 rounded" data-test-id="test-title">
      <h1>Hola {firstName}!</h1>
      <p>I am a developer </p>
    </div>
  );
}
