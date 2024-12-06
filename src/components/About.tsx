import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Por que nos escolher?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Garantia Estendida</h3>
            <p className="text-gray-600">
              Todos os nossos veículos possuem garantia estendida de fábrica
            </p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Qualidade Certificada</h3>
            <p className="text-gray-600">
              Veículos inspecionados e certificados pelos melhores especialistas
            </p>
          </div>
          <div className="text-center">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Atendimento 24/7</h3>
            <p className="text-gray-600">
              Suporte e assistência disponíveis 24 horas por dia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}