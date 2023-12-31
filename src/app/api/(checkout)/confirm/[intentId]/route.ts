
import { orderByIntentIdQuery } from "@/utils/queries";
import client from "@/utils/sanity";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request: NextRequest, 
  { params }: { params: { intentId: string } }) => {
  const { intentId } = params;

  const order = await client.fetch(orderByIntentIdQuery, {
    intent_id: intentId
  })

  try {
    await client
    .patch(order._id)
    .set({
        paymentStatus: "Paid",
        status: "Being Prepared",
        paidAt: "2023-08-17T14:15:00.000Z"
      })
    .commit();
    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};