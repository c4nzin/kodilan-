import React, { JSX, useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBriefcase,
  faMapMarkerAlt,
  faTags,
  faBuilding,
  faGlobe,
  faImage,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { Terminal } from "lucide-react";
import { Header } from "../components/Header";

function CreateJob() {
  const [email, setEmail] = useState("");
  const [pozisyon, setPozisyon] = useState("");
  const [ilanAciklamasi, setIlanAciklamasi] = useState("");
  const [lokasyon, setLokasyon] = useState("");
  const [ilanTipi, setIlanTipi] = useState("");
  const [etiketler, setEtiketler] = useState("");
  const [firmaAdi, setFirmaAdi] = useState("");
  const [website, setWebsite] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [twitterKullaniciAdi, setTwitterKullaniciAdi] = useState("");
  const [linkedinKullaniciAdi, setLinkedinKullaniciAdi] = useState("");
  const [alertContent, setAlertContent] = useState<JSX.Element | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      email,
      pozisyon,
      ilanAciklamasi,
      lokasyon,
      ilanTipi,
      etiketler,
      firmaAdi,
      website,
      logoUrl,
      twitterKullaniciAdi,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/ilan/olustur`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("ilan", response.data);

      setAlertContent(
        <Alert className="mb-4 bg-green-500 text-white">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Başarılı</AlertTitle>
          <AlertDescription className="text-white">
            İlan başarıyla oluşturuldu!
          </AlertDescription>
        </Alert>
      );
    } catch (error: any) {
      console.error("İlan oluşturulurken hata oluştu:", error);

      setAlertContent(
        <Alert className="mb-4 bg-red-100 text-white">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Hata</AlertTitle>
          <AlertDescription className="text-white">
            İlan oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.
          </AlertDescription>
        </Alert>
      );
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <Header
        onAddJob={function (): void {
          // throw new Error("Function not implemented.");
        }}
      />

      <h1 className="text-3xl font-bold  mt-10">İlan Oluştur</h1>

      {alertContent}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBriefcase} className="text-gray-500" />
          <Input
            type="text"
            placeholder="Pozisyon"
            value={pozisyon}
            onChange={(e) => setPozisyon(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <ReactQuill
          value={ilanAciklamasi}
          onChange={setIlanAciklamasi}
          className="bg-white"
        />

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-500" />
          <select
            value={lokasyon}
            onChange={(e) => setLokasyon(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
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
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBriefcase} className="text-gray-500" />
          <select
            value={ilanTipi}
            onChange={(e) => setIlanTipi(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          >
            <option value="">İlan Tipi Seçiniz</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Stajyer">Stajyer</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faTags} className="text-gray-500" />
          <Input
            type="text"
            placeholder="Etiketler (virgülle ayırın)"
            value={etiketler}
            onChange={(e) => setEtiketler(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBuilding} className="text-gray-500" />
          <Input
            type="text"
            placeholder="Firma Adı"
            value={firmaAdi}
            onChange={(e) => setFirmaAdi(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faGlobe} className="text-gray-500" />
          <Input
            type="url"
            placeholder="Website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faImage} className="text-gray-500" />
          <Input
            type="url"
            placeholder="Logo URL"
            value={logoUrl}
            onChange={(e) => setLogoUrl(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faX} className="text-gray-500" />
          <Input
            type="text"
            placeholder="Twitter(X) kullanıcı adınız."
            value={twitterKullaniciAdi}
            onChange={(e) => setTwitterKullaniciAdi(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="LinkedIn kullanıcı adınız."
            value={linkedinKullaniciAdi}
            onChange={(e) => setLinkedinKullaniciAdi(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        <Button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          İlan Oluştur
        </Button>
      </form>
    </div>
  );
}

export default CreateJob;
