"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handelFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handelFilter={handelFilter}
        activeFilter={activeFilter}
      >
        All Cabins
      </Button>

      <Button
        filter="small"
        handelFilter={handelFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3guests
      </Button>

      <Button
        filter="medium"
        handelFilter={handelFilter}
        activeFilter={activeFilter}
      >
        4&mdash;7guests
      </Button>

      <Button
        filter="large"
        handelFilter={handelFilter}
        activeFilter={activeFilter}
      >
        8&mdash;12guests
      </Button>
    </div>
  );
}

export function Button({ filter, handelFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handelFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
