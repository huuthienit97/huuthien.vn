export default async function TestPage() {
  await new Promise((resolve) => setTimeout(resolve, 5000)); // delay 5s
  return <div style={{color: 'white', fontSize: 32, textAlign: 'center'}}>Trang Test Loading</div>;
} 