"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  MessageCircle,
  FileText,
  Award,
  Users,
  Zap,
  DollarSign,
  Heart,
  Baby,
  Activity,
  Shield,
} from "lucide-react"
import Image from "next/image"

export default function UltrassomLanding() {
  const whatsappNumber = "557530268494"

  return (
    <div className="min-h-screen font-oscine" style={{ background: "linear-gradient(to bottom, #8dbf4410, white)" }}>
    {/* Header */}
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src="/atendja.png"
            alt="Atend Já Logo"
            width={120}
            height={40}
            className="h-14 w-auto"
          />
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" style={{ color: "#008B47" }} />
            <span style={{ color: "#3B3F3D" }}>(75) 3026-8494</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" style={{ color: "#008B47" }} />
            <span style={{ color: "#3B3F3D" }}>Seg-Sáb: 7h às 19h</span>
          </div>
        </div>
      </div>
    </header>


      {/* Header Hero Section */}
      <section
        className="text-white py-16 md:py-14 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #008B47 0%, #2EA55C 50%, #8dbf44 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#fff " }}>
                Ultrassom em Feira de Santana com <span className="font-bold" style={{ color: "#fff" }}>Resultados Ágeis</span> e{" "}
                <span className="font-bold" style={{ color: "#fff" }}>Preço Justo</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-6">
                Na Atend Já, você faz seu exame com equipamentos de última geração, sem filas e sem necessidade de plano
                de saúde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-[#2EA55C] px-8 py-4 text-lg hover:opacity-90"
                  style={{ backgroundColor: "#fff" }}
                  onClick={() => window.open(`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&type=phone_number&app_absent=0`, "_blank")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  AGENDAR CONSULTA
                </Button>

              </div>
              
            </div>
            <div className="relative flex justify-end">
              <Image
                src="/6.png?height=500&width=500"
                alt="Equipamento de ultrassom moderno"
                width={500}
                height={400}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Ultrassom */}
      <section className="py-16 bg-white" id="exames">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#3b3f3d" }}>
              Exames Disponíveis com Laudo Imediato
            </h2>
            <p className="text-lg text-gray-600">
              Todos os exames com equipamentos de última geração e médicos especialistas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Activity className="w-12 h-12 mx-auto mb-2" style={{ color: "#2EA55C" }} />
                <CardTitle className="text-lg">Ultrassom Abdominal</CardTitle>
                <CardDescription>Avaliação de fígado, vesícula e rins</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
               
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&type=phone_number&app_absent=0`, "_blank")}
                  style={{ borderColor: "#008B47", color: "#008B47" }}
                >
                  AGENDAR CONSULTA
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-2" style={{ color: "#2EA55C" }} />
                <CardTitle className="text-lg">Ultrassom Pélvico</CardTitle>
                <CardDescription>Para acompanhamento ginecológico</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&type=phone_number&app_absent=0`, "_blank")}
                  style={{ borderColor: "#008B47", color: "#008B47" }}
                >
                   AGENDAR CONSULTA
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-2" style={{ color: "#2EA55C" }} />
                <CardTitle className="text-lg">Ultrassom de Mama</CardTitle>
                <CardDescription>Complementar à mamografia</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
               
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&type=phone_number&app_absent=0`, "_blank")}
                  style={{ borderColor: "#008B47", color: "#008B47" }}
                >
                 AGENDAR CONSULTA
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Baby className="w-12 h-12 mx-auto mb-2" style={{ color: "#2EA55C" }} />
                <CardTitle className="text-lg">Ultrassom Obstétrico</CardTitle>
                <CardDescription>Acompanhamento da gravidez</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
               
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&type=phone_number&app_absent=0`, "_blank")}
                  style={{ borderColor: "#008B47", color: "#008B47" }}
                >
                   AGENDAR CONSULTA
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="p-6 rounded-lg text-center" style={{ backgroundColor: "#f0fdf4" }}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
              <div className="flex items-center" style={{ color: "#008B47" }}>
                <Clock className="w-5 h-5 mr-2" />
                Agendamento no mesmo dia
              </div>
              <div className="flex items-center" style={{ color: "#008B47" }}>
                <FileText className="w-5 h-5 mr-2" />
                Não precisa jejum para maioria dos exames
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50" id="como-funciona">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#3b3f3d" }}>
              3 Passos para Seu Ultrassom sem Burocracia
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                style={{ backgroundColor: "#008B47" }}
              >
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Agendamento Rápido</h3>
              <p className="text-gray-600">Via WhatsApp ou presencial, sem complicação</p>
              <MessageCircle className="w-12 h-12 mx-auto mt-4" style={{ color: "#2EA55C" }} />
            </div>

            <div className="text-center">
              <div
                className="text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                style={{ backgroundColor: "#008B47" }}
              >
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Realização do Exame</h3>
              <p className="text-gray-600">Equipe especializada e ambiente climatizado</p>
              <Users className="w-12 h-12 mx-auto mt-4" style={{ color: "#2EA55C" }} />
            </div>

            <div className="text-center">
              <div
                className="text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold"
                style={{ backgroundColor: "#008B47" }}
              >
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Resultados</h3>
              <p className="text-gray-600">Laudo digital ou impresso no mesmo dia</p>
              <FileText className="w-12 h-12 mx-auto mt-4" style={{ color: "#2EA55C" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white" id="diferenciais">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#3b3f3d" }}>
              Por que fazer seu ultrassom na Atend Já?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f0fdf4" }}>
              <Award className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "#008B47" }} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Equipamento Moderno</h3>
                <p className="text-gray-600">Tecnologia de ponta para diagnósticos precisos</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f0fdf4" }}>
              <Zap className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "#2EA55C" }} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Atendimento em até 24h</h3>
                <p className="text-gray-600">Agilidade quando você mais precisa</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f0fdf4" }}>
              <Users className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "#8dbf44" }} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Médicos Radiologistas</h3>
                <p className="text-gray-600">Profissionais experientes e qualificados</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f0fdf4" }}>
              <DollarSign className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "#008B47" }} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Preços 30% abaixo da média</h3>
                <p className="text-gray-600">Qualidade com preço justo</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f0fdf4" }}>
              <MapPin className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "#2EA55C" }} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Localização Central</h3>
                <p className="text-gray-600">No Ponto Central, fácil acesso</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg" style={{ backgroundColor: "#f0fdf4" }}>
              <Shield className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "#8dbf44" }} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Equipamento Certificado</h3>
                <p className="text-gray-600">Selo de qualidade e segurança</p>
              </div>
            </div>

            
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="text-white px-8 py-4 text-lg hover:opacity-90 font-bold"
              style={{ backgroundColor: "#008B47" }}
              onClick={() => window.open(`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&type=phone_number&app_absent=0`, "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              AGENDAR CONSULTA
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section 
        className="py-16" 
        id="depoimentos"
        style={{
          background: `linear-gradient(135deg, #008B47 0%, #2EA55C 50%, #8dbf44 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              O que dizem nossos pacientes
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
              <span className="text-lg font-semibold text-white">4.9/5 no Google</span>
              <span className="text-white/80">• 200+ exames mensais</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-white mb-4">
                  "Fiz meu ultrassom às 8h e às 11h já tinha o laudo. Incrível! Atendimento rápido e profissional."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <span className="font-semibold text-white">
                      M
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Maria Silva</p>
                    <p className="text-sm text-white/80">Paciente</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-white mb-4">
                  "Preço justo e a médica explicou tudo durante o exame. Recomendo para quem não tem plano."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <span className="font-semibold text-white">
                      J
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">João Santos</p>
                    <p className="text-sm text-white/80">Paciente</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                <p className="text-white mb-4">
                  "Equipamento moderno e ambiente limpo. Consegui agendar no mesmo dia que liguei."
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    <span className="font-semibold text-white">
                      A
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Ana Costa</p>
                    <p className="text-sm text-white/80">Paciente</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#3b3f3d" }}>
              Tire suas dúvidas sobre ultrassom
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: "#008B47" }} />
                  Como funciona o atendimento?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Presencial com agendamento via WhatsApp. Atendimento ágil e sem filas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: "#008B47" }} />
                  Trabalha com convênios?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Não. Atendemos exclusivamente como clínica particular, com recibo para reembolso.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: "#008B47" }} />
                  Como agendo minha consulta?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Entre em contato pelo WhatsApp (75) 3026‑8494 ou via redes sociais.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: "#008B47" }} />
                  Qual o valor das consultas?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Consultas a partir de R$ 150 e procedimentos desde R$ 80.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="text-white px-8 py-4 text-lg hover:opacity-90 font-bold"
              style={{ backgroundColor: "#008B47" }}
              onClick={() => window.open(`https://api.whatsapp.com/send/?phone=${whatsappNumber}&text&type=phone_number&app_absent=0`, "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              AGENDAR CONSULTA
            </Button>
          </div>
        </div>
      </section>

          {/* Footer */}
          <footer style={{ backgroundColor: "#3b3f3d" }} className="text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/atendjabranco.png"
                  alt="Atend Já Logo"
                  width={120}
                  height={60}
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-white/70 mb-4">
              Ultrassonografia com tecnologia de ponta e preços acessíveis em Feira de Santana.
              </p>
              
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>(75) 3026-8494</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Rua Cícero Dantas, 221, Ponto Central</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" style={{ color: "#8DBF44" }} />
                  <span>Segunda a Sábado: 7h às 19h</span>
                </div>
              </div>
            </div>

          

            <div>
              <h3 className="text-lg font-semibold mb-4">Desenvolvido por</h3>
              <div className="flex items-center">
                <Image
                  src="/logo02.png"
                  alt="HW Logo"
                  width={120}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; {new Date().getFullYear()} Atend Já Feira de Santana- Todos os direitos reservados.</p>
            
          </div>
        </div>
      </footer>

     
    </div>
  )
}
