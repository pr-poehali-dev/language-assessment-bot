import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const languages = [
    { code: 'en', name: 'Английский', flag: '🇬🇧', learners: '2.5М' },
    { code: 'es', name: 'Испанский', flag: '🇪🇸', learners: '1.8М' },
    { code: 'fr', name: 'Французский', flag: '🇫🇷', learners: '1.2М' },
    { code: 'de', name: 'Немецкий', flag: '🇩🇪', learners: '980К' },
    { code: 'it', name: 'Итальянский', flag: '🇮🇹', learners: '750К' },
    { code: 'zh', name: 'Китайский', flag: '🇨🇳', learners: '1.5М' },
    { code: 'ja', name: 'Японский', flag: '🇯🇵', learners: '890К' },
    { code: 'ko', name: 'Корейский', flag: '🇰🇷', learners: '670К' },
  ];

  const features = [
    {
      icon: 'Brain',
      title: 'ИИ + Эксперты',
      description: 'Двойная оценка: искусственный интеллект и квалифицированные специалисты проверяют ваш уровень',
    },
    {
      icon: 'Award',
      title: 'Международные сертификаты',
      description: 'Получите сертификат, который признается во всём мире',
    },
    {
      icon: 'TrendingUp',
      title: 'Отслеживание прогресса',
      description: 'Визуализация вашего прогресса в реальном времени с детальной аналитикой',
    },
    {
      icon: 'Users',
      title: 'Обучение от профи',
      description: 'ИИ обучается на методиках реальных преподавателей с многолетним опытом',
    },
  ];

  const stats = [
    { label: 'Активных пользователей', value: '50,000+', icon: 'Users' },
    { label: 'Выданных сертификатов', value: '12,500+', icon: 'Award' },
    { label: 'Языков доступно', value: '25+', icon: 'Globe' },
    { label: 'Точность оценки', value: '98.5%', icon: 'Target' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <span className="text-2xl font-bold">LinguaTest</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#languages" className="text-sm font-medium hover:text-primary transition-colors">Языки</a>
              <a href="#testing" className="text-sm font-medium hover:text-primary transition-colors">Тестирование</a>
              <a href="#progress" className="text-sm font-medium hover:text-primary transition-colors">Прогресс</a>
              <a href="#certificates" className="text-sm font-medium hover:text-primary transition-colors">Сертификаты</a>
              <Button>Начать тест</Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4" variant="secondary">
                <Icon name="Sparkles" size={14} className="mr-1" />
                ИИ + Живые эксперты
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Оцените свой уровень владения языком
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Автоматическая оценка с использованием искусственного интеллекта и проверкой квалифицированных специалистов. Получите международный сертификат.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Пройти тест
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Как это работает
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/92aa2736-67ca-4a84-be95-72ff92592b0e/files/f8158a1d-3574-4ab5-855a-907f0feabfba.jpg" 
                alt="Learning Platform" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <Icon name={stat.icon as any} size={40} className="mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="languages" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="outline">
              <Icon name="Globe" size={14} className="mr-1" />
              25+ языков
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите язык для изучения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От популярных европейских до восточных языков — всё в одной платформе
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {languages.map((lang, index) => (
              <Card 
                key={lang.code} 
                className={`cursor-pointer transition-all hover:shadow-lg hover:scale-105 animate-scale-in ${selectedLanguage === lang.code ? 'ring-2 ring-primary' : ''}`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedLanguage(lang.code)}
              >
                <CardHeader className="text-center pb-3">
                  <div className="text-5xl mb-2">{lang.flag}</div>
                  <CardTitle className="text-lg">{lang.name}</CardTitle>
                  <CardDescription className="text-xs">{lang.learners} учащихся</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="CheckCircle2" size={14} className="mr-1" />
              Двойная проверка
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как проходит тестирование</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Уникальная система оценки совмещает мощь ИИ и опыт живых экспертов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="animate-slide-up" style={{ animationDelay: '0ms' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={24} className="text-primary" />
                </div>
                <CardTitle>1. Пройдите тест</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Выполните комплексное тестирование всех навыков: чтение, письмо, аудирование, говорение
                </p>
              </CardContent>
            </Card>
            <Card className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Brain" size={24} className="text-secondary" />
                </div>
                <CardTitle>2. ИИ анализ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Искусственный интеллект мгновенно оценивает ваши ответы на основе методик реальных преподавателей
                </p>
              </CardContent>
            </Card>
            <Card className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="UserCheck" size={24} className="text-accent" />
                </div>
                <CardTitle>3. Проверка эксперта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Квалифицированный специалист подтверждает оценку ИИ и даёт персональные рекомендации
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="progress" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge className="mb-4" variant="outline">
                <Icon name="BarChart3" size={14} className="mr-1" />
                Аналитика
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Отслеживайте свой прогресс</h2>
              <p className="text-xl text-muted-foreground">
                Визуализация вашего развития с детальной статистикой по всем навыкам
              </p>
            </div>
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Ваш прогресс по английскому языку</CardTitle>
                <CardDescription>Последнее обновление: сегодня</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Чтение</span>
                    <span className="text-sm text-muted-foreground">B2 - 85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Письмо</span>
                    <span className="text-sm text-muted-foreground">B1 - 72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Аудирование</span>
                    <span className="text-sm text-muted-foreground">B2 - 78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Говорение</span>
                    <span className="text-sm text-muted-foreground">B1 - 68%</span>
                  </div>
                  <Progress value={68} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Award" size={14} className="mr-1" />
              Международное признание
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Получите сертификат</h2>
            <p className="text-xl text-muted-foreground mb-8">
              После успешного прохождения тестирования вы получите сертификат, который котируется международно и подтверждает ваш уровень владения языком
            </p>
            <Card className="text-left animate-scale-in">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">Сертификат LinguaTest</CardTitle>
                    <CardDescription>Уровень владения языком: B2 (Upper-Intermediate)</CardDescription>
                  </div>
                  <Icon name="Award" size={48} className="text-primary" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Владелец</p>
                    <p className="font-medium">Иван Петров</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Язык</p>
                    <p className="font-medium">Английский 🇬🇧</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Дата выдачи</p>
                    <p className="font-medium">04 ноября 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">ID сертификата</p>
                    <p className="font-medium">LT-2025-048392</p>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    ✓ Проверен ИИ-системой и квалифицированным экспертом
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ✓ Действителен во всех странах
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы узнать свой уровень?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Начните тестирование прямо сейчас и получите международный сертификат через 24 часа
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            <Icon name="Rocket" size={20} className="mr-2" />
            Начать тестирование
          </Button>
        </div>
      </section>

      <footer className="bg-muted/30 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={28} className="text-primary" />
                <span className="text-xl font-bold">LinguaTest</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Автоматическая оценка языковых навыков с использованием ИИ и экспертов
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Платформа</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О платформе</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Специалисты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Методика</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Языки</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Английский</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Испанский</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Все языки</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 LinguaTest. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
