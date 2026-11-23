import App from "@/components/App";
import { loadDays } from "@/data/days/index";

export default function Home() {
  const days = loadDays();

  return <App days={days} />;
}