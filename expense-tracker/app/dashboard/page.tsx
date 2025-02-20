import { BarGraphComponent } from "@/components/bar-graph";
import { CardComponent } from "@/components/card-component";
import { LineGraphComponent } from "@/components/line-graph";
import { PieChartComponent } from "@/components/pie-chart";
import { TransactionTable } from "@/components/transaction-table";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min md:grid-cols-4">
        <CardComponent
          topic="Total Income"
          amount="$45,231.89"
          description="+20.1% from last month"
        />
        <CardComponent
          topic="Total Expenses"
          amount="+2350"
          description="+180.1% from last month"
        />
        <CardComponent
          topic="Balance"
          amount="+12,234"
          description="+19% from last month"
        />
        <CardComponent
          topic="Top Category Now"
          amount="+573"
          description="+201 since last hour"
        />
      </div>
      <div className="grid auto-rows-min md:grid-cols-3 gap-4">
        <PieChartComponent />

        <LineGraphComponent />
        <BarGraphComponent />
      </div>
      <div className="grid auto-rows-min md:grid-cols-1 gap-4 p-4">
        <TransactionTable isDashboard={true} />
      </div>
    </div>
  );
}
