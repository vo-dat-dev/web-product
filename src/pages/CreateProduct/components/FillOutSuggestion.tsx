const FillOutSuggestion = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Fill out suggestion</h2>
      <p className="text-sm text-gray-500">
        Based on the information provided, here are some suggestions to help you
        fill out the product details:
      </p>
      <ul className="list-disc list-inside text-sm text-gray-700">
        <li>Ensure that the product name is clear and descriptive.</li>
        <li>
          Provide a detailed description that highlights the key features and
          benefits.
        </li>
        <li>
          Include high-quality images that showcase the product from different
          angles.
        </li>
        <li>Set a competitive price based on market research.</li>
        <li>
          Consider adding customer reviews or testimonials for social proof.
        </li>
      </ul>
    </div>
  );
};

export default FillOutSuggestion;
