"use client";
import { CardComponent } from "@/components/card-component";
import { BudgetInterface } from "@/components/Interface/interface";
import { PieChartComponent } from "@/components/pie-chart";
import { useFetchBudget } from "./_lib/fetch-budget";

const BudgetPage = () => {
  const { data, error, loading } = useFetchBudget<BudgetInterface>(
    "http://localhost:5000/budget"
  );

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min md:grid-cols-4">
        <CardComponent
          topic="Total Budget"
          amount={`$${data?.totalBudget ?? 0}`}
          description="+20.1% from last month"
        />
        <CardComponent
          topic="Remaining Budget"
          amount={`$${data?.remainingBudget ?? 0}`}
          description="+180.1% from last month"
        />
        <CardComponent
          topic="Used Budget"
          amount={`$${(data?.totalBudget ?? 0) - (data?.remainingBudget ?? 0)}`}
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
        <PieChartComponent />
        <PieChartComponent />
      </div>
      <div className="grid auto-rows-min md:grid-cols-1 gap-4 p-4"></div>
    </div>
  );
};

export default BudgetPage;
