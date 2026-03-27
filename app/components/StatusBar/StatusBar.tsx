import DateTime from "../DateTime/DateTime";

export default function StatusBar() {
  return (
    <div className="bg-background flex justify-between text-sm py-2 px-4">
      <div>Menus</div>
      <div>
        <DateTime />
      </div>
    </div>
  );
}
