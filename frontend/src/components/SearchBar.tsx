import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIcons, faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = ({
  searchTerm,
  setSearchTerm,
  lokasyon,
  setLokasyon,
  onSearch,
  fetchJobs,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  lokasyon: string;
  setLokasyon: (value: string) => void;
  onSearch: () => void;
  fetchJobs: (query: string) => void;
}) => (
  console.log("searchTerm", searchTerm),
  console.log("lokasyon", lokasyon),
  (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Input
          type="text"
          placeholder="Pozisyon adı, teknoloji adı"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1  px-6 py-2 rounded-md text-black border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          className="px-4 py-2 rounded-md bg-white text-black border-gray-300"
          value={lokasyon}
          onChange={(e) => {
            console.log("lokasyon", e.target.value);
            setLokasyon(e.target.value);
          }}
        >
          <option value="">Şehir Seçiniz</option>
          <option value="Adana">Adana</option>
          <option value="Ankara">Ankara</option>
          <option value="İstanbul">İstanbul</option>
          <option value="İzmir">İzmir</option>
          <option value="Bursa">Bursa</option>
          <option value="Kocaeli">Kocaeli</option>
          <option value="Antalya">Antalya</option>
          <option value="Konya">Konya</option>
          <option value="Kayseri">Kayseri</option>
          <option value="Gaziantep">Gaziantep</option>
          <option value="Mersin">Mersin</option>
          <option value="Sakarya">Sakarya</option>
          <option value="Trabzon">Trabzon</option>
          <option value="Eskişehir">Eskişehir</option>
          <option value="Samsun">Samsun</option>
          <option value="Manisa">Manisa</option>
          <option value="Tekirdağ">Tekirdağ</option>
          <option value="Aydın">Aydın</option>
          <option value="Diyarbakır">Diyarbakır</option>
          <option value="Malatya">Malatya</option>
          <option value="Bolu">Bolu</option>
          <option value="Çanakkale">Çanakkale</option>
          <option value="Kütahya">Kütahya</option>
          <option value="Aksaray">Aksaray</option>
          <option value="Burdur">Burdur</option>
          <option value="Kahramanmaraş">Kahramanmaraş</option>
          <option value="Ordu">Ordu</option>
          <option value="Zonguldak">Zonguldak</option>
          <option value="Kastamonu">Kastamonu</option>
          <option value="Bartın">Bartın</option>
          <option value="Karabük">Karabük</option>
          <option value="Düzce">Düzce</option>
          <option value="Rize">Rize</option>
          <option value="Artvin">Artvin</option>
          <option value="Bayburt">Bayburt</option>
          <option value="Giresun">Giresun</option>
          <option value="Gümüşhane">Gümüşhane</option>
          <option value="Sinop">Sinop</option>
          <option value="Tokat">Tokat</option>
          <option value="Çorum">Çorum</option>
          <option value="Amasya">Amasya</option>
          <option value="Sivas">Sivas</option>
          <option value="Niğde">Niğde</option>
          <option value="Nevşehir">Nevşehir</option>
          <option value="Kırıkkale">Kırıkkale</option>
          <option value="Kırşehir">Kırşehir</option>
          <option value="Yozgat">Yozgat</option>
          <option value="Kars">Kars</option>
          <option value="Ardahan">Ardahan</option>
          <option value="Iğdır">Iğdır</option>
          <option value="Erzurum">Erzurum</option>
          <option value="Erzincan">Erzincan</option>
          <option value="Bingöl">Bingöl</option>
          <option value="Tunceli">Tunceli</option>
          <option value="Elazığ">Elazığ</option>
          <option value="Malatya">Malatya</option>
          <option value="Hakkari">Hakkari</option>
          <option value="Van">Van</option>
          <option value="Bitlis">Bitlis</option>
          <option value="Muş">Muş</option>
          <option value="Siirt">Siirt</option>
          <option value="Batman">Batman</option>
          <option value="Şırnak">Şırnak</option>
          <option value="Diyarbakır">Diyarbakır</option>
          <option value="Mardin">Mardin</option>
          <option value="Kilis">Kilis</option>
        </select>
        <Button
          variant="default"
          className="bg-white text-black hover:bg-gray-200 w-[50px] flex items-center justify-center gap-2"
          onClick={() =>
            fetchJobs(`pozisyon=${searchTerm}&lokasyon=${lokasyon}`)
          }
        >
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-500 color:white"
          />
        </Button>
      </div>

      <div className="mt-6 flex gap-2">
        {["Frontend", "Backend", "Mobile", "DevOps", "Remote"].map((tag) => (
          <Button
            key={tag}
            variant="outline"
            className="px-4 py-2 border border-gray-500 text-gray-300 rounded-lg bg-transparent transition-all duration-2000 hover:bg-gradient-to-r hover:from-gray hover:to-purple-500 hover:text-white"
            onClick={() => fetchJobs(`pozisyon=${tag}`)}
          >
            {tag}
          </Button>
        ))}
        {["Istanbul", "Bursa", "Ankara", "İzmir"].map((tag) => (
          <Button
            key={tag}
            variant="outline"
            className="px-4 py-2 border border-gray-500 text-gray-300 rounded-lg bg-transparent transition-all duration-2000 hover:bg-gradient-to-r hover:from-gray hover:to-purple-500 hover:text-white"
            onClick={() => fetchJobs(`lokasyon=${tag}`)}
          >
            {tag}
          </Button>
        ))}
      </div>
      <div className="mt-6 flex gap-2"></div>
    </div>
  )
);
