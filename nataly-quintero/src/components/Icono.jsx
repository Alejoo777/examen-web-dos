import {
  BookOpen, House, LayoutGrid, Mail, ChartColumn, Star, ArrowRight, Search,
  Layers, Book, Tag, FileText, BookMarked, Calendar, Phone, MapPin, Clock,
  Send, Landmark, SlidersVertical, Moon, Type, Box
} from "lucide-react";

// Relaciona el nombre del icono (texto) con su componente de lucide-react
const iconos = {
  "book-open": BookOpen,
  "home": House,
  "grid": LayoutGrid,
  "mail": Mail,
  "bar-chart-3": ChartColumn,
  "star": Star,
  "arrow-right": ArrowRight,
  "search": Search,
  "layers": Layers,
  "book": Book,
  "tag": Tag,
  "file-text": FileText,
  "book-marked": BookMarked,
  "calendar": Calendar,
  "phone": Phone,
  "map-pin": MapPin,
  "clock": Clock,
  "send": Send,
  "landmark": Landmark,
  "sliders": SlidersVertical,
  "layout-grid": LayoutGrid,
  "moon": Moon,
  "type": Type,
  "box": Box
};

function Icono({ nombre, className }) {
  const ComponenteIcono = iconos[nombre] || Book;
  return <ComponenteIcono className={className} />;
}

export default Icono;
