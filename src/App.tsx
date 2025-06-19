import React from 'react';
import { 
  MapPin, 
  Shield, 
  Zap, 
  Eye, 
  Users, 
  Route, 
  Bell, 
  Lock, 
  Gauge, 
  Calendar,
  Map,
  Navigation,
  AlertTriangle,
  Activity,
  Power,
  Menu,
  X,
  Crown,
  Palette,
  Building,
  DollarSign,
  Rocket,
  Settings,
  Globe,
  Award,
  TrendingUp,
  Smartphone,
  Cloud,
  Headphones
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cadastro Administrativo",
      description: "Gestão completa de usuários e rastreadores com controle total"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização em Tempo Real",
      description: "Monitoramento preciso e instantâneo da sua frota"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Monitoramento Individual/Coletivo",
      description: "Controle personalizado para cada veículo ou grupo"
    },
    {
      icon: <Route className="w-6 h-6" />,
      title: "Histórico de Rotas",
      description: "Consulte rotas por veículo e data com relatórios detalhados"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cerca Virtual",
      description: "Alertas automáticos de entrada e saída de áreas definidas"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Comandos de Bloqueio",
      description: "Bloqueio e desbloqueio remoto para máxima segurança"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Controle de Velocidade",
      description: "Monitoramento e alertas de velocidade em tempo real"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Hodômetro Digital",
      description: "Controle preciso da quilometragem dos veículos"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Notificações Push",
      description: "Alertas instantâneos para situações importantes"
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Mapas Personalizados",
      description: "Google Maps com visões híbrida, satélite e estradas"
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Simulador de Rotas",
      description: "Reviva trajetos percorridos com simulação detalhada"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Alertas Inteligentes",
      description: "Pânico, movimento, parada, ignição e muito mais"
    }
  ];

  const whiteLabelBenefits = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Sua Marca em Destaque",
      description: "Sistema 100% personalizado com sua identidade visual, logo e cores da sua empresa",
      highlight: "Branding Completo"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Personalizado",
      description: "Interface totalmente customizável para refletir a identidade da sua marca",
      highlight: "Visual Único"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Domínio Próprio",
      description: "Seu próprio endereço web (ex: rastreamento.suaempresa.com.br)",
      highlight: "URL Exclusiva"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Maior Rentabilidade",
      description: "Defina seus próprios preços e maximize seus lucros sem intermediários",
      highlight: "100% do Lucro"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lançamento Rápido",
      description: "Sua central funcionando em até 24 horas após a contratação",
      highlight: "Deploy Imediato"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Controle Total",
      description: "Gerencie usuários, planos, preços e funcionalidades de forma independente",
      highlight: "Autonomia Completa"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-idiomas",
      description: "Sistema disponível em português, inglês e espanhol",
      highlight: "Alcance Global"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Credibilidade",
      description: "Fortaleça sua marca com uma plataforma profissional e confiável",
      highlight: "Reputação Sólida"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Escalabilidade",
      description: "Cresça sem limites - suporte para milhares de rastreadores simultâneos",
      highlight: "Crescimento Ilimitado"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Mobile Personalizado",
      description: "Aplicativo para Android e iOS com sua marca na Google Play e App Store",
      highlight: "Apps Exclusivos"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Infraestrutura Robusta",
      description: "Servidores dedicados com 99.9% de uptime e backup automático",
      highlight: "Alta Disponibilidade"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Suporte Especializado",
      description: "Equipe técnica dedicada para implementação e suporte contínuo",
      highlight: "Apoio Total"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/512x512.png" 
                alt="TOP TRACKING Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-white">TOP TRACKING</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Início</a>
              <a href="#beneficios" className="text-gray-300 hover:text-white transition-colors">Benefícios</a>
              <a href="https://montesuacentral.com/captura" className="text-gray-300 hover:text-white transition-colors">Planos</a>
              <a href="https://wa.me/5511966583001" className="text-gray-300 hover:text-white transition-colors">Contato</a>
              <a href="https://cliente.montesuacentral.com/index.php?rp=/login" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-500 transition-all">
                Área do Cliente
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#inicio" className="block px-3 py-2 text-gray-300 hover:text-white">Início</a>
                <a href="#beneficios" className="block px-3 py-2 text-gray-300 hover:text-white">Benefícios</a>
                <a href="https://montesuacentral.com/captura" className="block px-3 py-2 text-gray-300 hover:text-white">Planos</a>
                <a href="https://wa.me/5511966583001" className="block px-3 py-2 text-gray-300 hover:text-white">Contato</a>
                <a href="https://cliente.montesuacentral.com/index.php?rp=/login" className="block px-3 py-2 text-blue-400">Área do Cliente</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2022/09/21/132059-752303208_large.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Monte sua
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Central de Rastreamento
            </span>
          </h1>

          {/* Sub Headline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tecnologia avançada para monitoramento em tempo real, controle total da sua frota 
            e segurança máxima para seus veículos
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://montesuacentral.com/captura"
              className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Ver Planos
            </a>
            <a 
              href="https://wa.me/5511966583001"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Falar com Especialista
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-cyan-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-blue-400/10 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* White Label Benefits Section */}
      <section id="beneficios" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Benefícios da Plataforma
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                White Label
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Tenha sua própria central de rastreamento com sua marca, design personalizado e controle total. 
              Maximize seus lucros e fortaleça sua presença no mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whiteLabelBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                    {benefit.icon}
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-400/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-500/30">
                    {benefit.highlight}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-xl"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Pronto para ter sua própria marca?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Transforme seu negócio com uma plataforma White Label completa e profissional
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://montesuacentral.com/captura"
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-500 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Ver Planos White Label
                </a>
                <a 
                  href="https://wa.me/5511966583001"
                  className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-200"
                >
                  Solicitar Demonstração
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Funcionalidades
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Completas
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Todas as ferramentas que você precisa para gerenciar sua frota com eficiência e segurança
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-900/70 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Monte sua central de rastreamento hoje mesmo e tenha controle total da sua frota
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://montesuacentral.com/captura"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Escolher Plano
            </a>
            <a 
              href="https://cliente.montesuacentral.com/index.php?rp=/login"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Acessar Sistema
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/512x512.png" 
                alt="TOP TRACKING Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-white">TOP TRACKING</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://montesuacentral.com/captura" className="text-gray-400 hover:text-white transition-colors">Planos</a>
              <a href="https://wa.me/5511966583001" className="text-gray-400 hover:text-white transition-colors">Contato</a>
              <a href="https://cliente.montesuacentral.com/index.php?rp=/login" className="text-gray-400 hover:text-white transition-colors">Área do Cliente</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 TOP TRACKING. Todos os direitos reservados. Tecnologia avançada em rastreamento veicular.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;