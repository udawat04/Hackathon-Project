
import PageMeta from "../../components/common/PageMeta";
import InputGroup from "../../components/form/form-elements/InputGroup";
export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 relative gap-4 md:gap-6">
        <div className="col-span-1 relative top-0 left-[30%]  space-y-6 xl:col-span-7">
        <InputGroup />
        </div>
        
      </div>
    </>
  );
}
