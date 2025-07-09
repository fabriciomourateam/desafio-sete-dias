
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Scale, Leaf, Clock, Users } from 'lucide-react';

const DietPlans = () => {
  const [selectedWeight, setSelectedWeight] = useState('60-70');

  const dietPlans = {
    'below-60': {
      title: 'Dieta para menos de 60kg',
      calories: '1400-1600 kcal',
      description: 'Plano nutricional balanceado para ganho de massa muscular',
      meals: [
        {
          time: '7:00',
          name: 'Café da Manhã',
          foods: ['2 fatias de pão integral', '1 ovo mexido', '1 copo de leite desnatado', '1 banana']
        },
        {
          time: '10:00',
          name: 'Lanche da Manhã',
          foods: ['1 iogurte natural', '1 colher de granola']
        },
        {
          time: '12:30',
          name: 'Almoço',
          foods: ['100g peito de frango grelhado', '3 colheres de arroz integral', '2 colheres de feijão', 'Salada verde à vontade']
        },
        {
          time: '15:30',
          name: 'Lanche da Tarde',
          foods: ['1 maçã', '10 amêndoas']
        },
        {
          time: '19:00',
          name: 'Jantar',
          foods: ['100g peixe assado', '2 batatas pequenas cozidas', 'Brócolis refogado']
        }
      ]
    },
    '60-70': {
      title: 'Dieta para 60-70kg',
      calories: '1600-1800 kcal',
      description: 'Plano equilibrado para manutenção e definição',
      meals: [
        {
          time: '7:00',
          name: 'Café da Manhã',
          foods: ['3 fatias de pão integral', '2 ovos mexidos', '1 copo de leite desnatado', '1 banana', '1 colher de aveia']
        },
        {
          time: '10:00',
          name: 'Lanche da Manhã',
          foods: ['1 iogurte grego', '1 colher de granola', '1 colher de mel']
        },
        {
          time: '12:30',
          name: 'Almoço',
          foods: ['120g peito de frango grelhado', '4 colheres de arroz integral', '3 colheres de feijão', 'Salada mista', '1 colher de azeite']
        },
        {
          time: '15:30',
          name: 'Lanche da Tarde',
          foods: ['1 vitamina com frutas', '1 colher de whey protein']
        },
        {
          time: '19:00',
          name: 'Jantar',
          foods: ['120g salmão grelhado', '3 batatas pequenas', 'Aspargos refogados', 'Salada verde']
        }
      ]
    },
    '70-80': {
      title: 'Dieta para 70-80kg',
      calories: '1800-2000 kcal',
      description: 'Plano para ganho de massa muscular e energia',
      meals: [
        {
          time: '7:00',
          name: 'Café da Manhã',
          foods: ['4 fatias de pão integral', '2 ovos mexidos', '1 copo de leite integral', '1 banana', '2 colheres de aveia']
        },
        {
          time: '10:00',
          name: 'Lanche da Manhã',
          foods: ['1 iogurte grego', '2 colheres de granola', '1 punhado de frutas vermelhas']
        },
        {
          time: '12:30',
          name: 'Almoço',
          foods: ['150g peito de frango', '5 colheres de arroz integral', '4 colheres de feijão', 'Salada completa', '1 colher de azeite']
        },
        {
          time: '15:30',
          name: 'Lanche da Tarde',
          foods: ['1 vitamina proteica', '1 punhado de castanhas']
        },
        {
          time: '19:00',
          name: 'Jantar',
          foods: ['150g carne vermelha magra', '4 batatas médias', 'Legumes refogados', 'Salada verde']
        }
      ]
    },
    '70-80-veg': {
      title: 'Dieta Vegetariana 70-80kg',
      calories: '1800-2000 kcal',
      description: 'Plano vegetariano rico em proteínas e nutrientes',
      meals: [
        {
          time: '7:00',
          name: 'Café da Manhã',
          foods: ['4 fatias de pão integral', '2 ovos mexidos', '1 copo de leite de amêndoas', '1 banana', '2 colheres de aveia']
        },
        {
          time: '10:00',
          name: 'Lanche da Manhã',
          foods: ['1 iogurte de coco', '2 colheres de granola', 'Mix de frutas']
        },
        {
          time: '12:30',
          name: 'Almoço',
          foods: ['150g tofu grelhado', '5 colheres de quinoa', '4 colheres de lentilha', 'Salada colorida', '1 colher de azeite']
        },
        {
          time: '15:30',
          name: 'Lanche da Tarde',
          foods: ['Smoothie verde com proteína vegetal', '1 punhado de nozes']
        },
        {
          time: '19:00',
          name: 'Jantar',
          foods: ['Hambúrguer de grão-de-bico', 'Batata doce assada', 'Brócolis no vapor', 'Salada de folhas']
        }
      ]
    },
    '80-90': {
      title: 'Dieta para 80-90kg',
      calories: '2000-2200 kcal',
      description: 'Plano para atletas e pessoas ativas',
      meals: [
        {
          time: '7:00',
          name: 'Café da Manhã',
          foods: ['5 fatias de pão integral', '3 ovos mexidos', '1 copo grande de leite', '1 banana', '3 colheres de aveia']
        },
        {
          time: '10:00',
          name: 'Lanche da Manhã',
          foods: ['2 iogurtes gregos', '2 colheres de granola', 'Mix de frutas']
        },
        {
          time: '12:30',
          name: 'Almoço',
          foods: ['180g peito de frango', '6 colheres de arroz integral', '4 colheres de feijão', 'Salada grande', '1 colher de azeite']
        },
        {
          time: '15:30',
          name: 'Lanche da Tarde',
          foods: ['Vitamina com whey protein', '1 punhado generoso de castanhas']
        },
        {
          time: '19:00',
          name: 'Jantar',
          foods: ['180g salmão', '5 batatas médias', 'Legumes variados', 'Salada verde abundante']
        }
      ]
    },
    '90-plus': {
      title: 'Dieta para 90kg ou mais',
      calories: '2200-2500 kcal',
      description: 'Plano robusto para pessoas com alta demanda energética',
      meals: [
        {
          time: '7:00',
          name: 'Café da Manhã',
          foods: ['6 fatias de pão integral', '3 ovos mexidos', '1 copo grande de leite', '2 bananas', '4 colheres de aveia']
        },
        {
          time: '10:00',
          name: 'Lanche da Manhã',
          foods: ['2 iogurtes gregos', '3 colheres de granola', 'Frutas variadas']
        },
        {
          time: '12:30',
          name: 'Almoço',
          foods: ['200g peito de frango', '7 colheres de arroz integral', '5 colheres de feijão', 'Salada completa', '2 colheres de azeite']
        },
        {
          time: '15:30',
          name: 'Lanche da Tarde',
          foods: ['Vitamina dupla com whey', '2 punhados de mix de castanhas']
        },
        {
          time: '19:00',
          name: 'Jantar',
          foods: ['200g carne vermelha magra', '6 batatas grandes', 'Legumes abundantes', 'Salada verde grande']
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-amber-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-4xl font-bold text-neutral-950 mb-2">
            Planos Alimentares
          </h1>
          <p className="text-neutral-600">
            Dietas personalizadas baseadas no seu peso e objetivos
          </p>
        </div>

        {/* Weight Category Selector */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {Object.entries(dietPlans).map(([key, plan]) => (
            <Button
              key={key}
              variant={selectedWeight === key ? "default" : "outline"}
              className={`p-4 h-auto flex-col space-y-2 ${
                selectedWeight === key 
                  ? 'bg-amber-400 hover:bg-amber-500 text-neutral-950' 
                  : 'hover:border-amber-300'
              }`}
              onClick={() => setSelectedWeight(key)}
            >
              <Scale className="w-5 h-5" />
              <span className="text-sm font-medium text-center">
                {plan.title.replace('Dieta para ', '')}
              </span>
            </Button>
          ))}
        </div>

        {/* Selected Diet Plan */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
          <CardHeader className="bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold">
                  {dietPlans[selectedWeight as keyof typeof dietPlans].title}
                </CardTitle>
                <p className="mt-1 opacity-90">
                  {dietPlans[selectedWeight as keyof typeof dietPlans].description}
                </p>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-neutral-950 text-lg px-4 py-2">
                {dietPlans[selectedWeight as keyof typeof dietPlans].calories}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              {dietPlans[selectedWeight as keyof typeof dietPlans].meals.map((meal, index) => (
                <div key={index} className="border border-neutral-200 rounded-lg p-4 hover:border-amber-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-amber-500" />
                      <h3 className="text-lg font-semibold text-neutral-950">{meal.name}</h3>
                    </div>
                    <Badge variant="outline" className="text-amber-700 border-amber-300">
                      {meal.time}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {meal.foods.map((food, foodIndex) => (
                      <div key={foodIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-neutral-700">{food}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-neutral-950 mb-2 flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Dicas Importantes
              </h4>
              <ul className="text-sm text-neutral-700 space-y-1">
                <li>• Beba pelo menos 2 litros de água por dia</li>
                <li>• Ajuste as porções conforme sua fome e atividade</li>
                <li>• Consuma as refeições nos horários sugeridos</li>
                <li>• Substitua alimentos conforme a lista de substituições</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DietPlans;
