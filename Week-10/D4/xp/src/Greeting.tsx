interface GreetingProps {
  name: string;
  messageCount: number;
}

const Greeting = ({ name, messageCount }: GreetingProps) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You have {messageCount} new messages.</p>
    </div>
  );
};

export default Greeting;