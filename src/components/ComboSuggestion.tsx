'use client';

import { useState } from 'react';
import { Loader2, Wand2 } from 'lucide-react';
import { suggestCombos, SuggestCombosInput, SuggestCombosOutput } from '@/ai/flows/suggest-combos';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useToast } from '@/hooks/use-toast';
import { useI18n } from '@/lib/i18n';

interface ComboSuggestionProps {
  menuItems: SuggestCombosInput['menuItems'];
}

function ComboCard({ combo }: { combo: SuggestCombosOutput[0] }) {
  const { t } = useI18n();
  return (
    <Card className="w-full overflow-hidden border-2 bg-card/50 backdrop-blur-sm border-primary/50 shadow-lg shadow-primary/10">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="font-headline text-2xl text-primary">{combo.name}</CardTitle>
          <div className="text-2xl font-bold text-primary font-headline whitespace-nowrap">
            Bs. {combo.price}
          </div>
        </div>
        <CardDescription className="text-sm">{combo.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-semibold text-foreground mb-2">{t('comboSuggestion.includes')}</p>
        <ul className="list-disc list-inside text-muted-foreground">
          {combo.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function ComboSuggestion({ menuItems }: ComboSuggestionProps) {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);
  const [combos, setCombos] = useState<SuggestCombosOutput>([]);
  const { toast } = useToast();

  const handleSuggestCombos = async () => {
    setLoading(true);
    setCombos([]);
    try {
      const result = await suggestCombos({ menuItems });
      setCombos(result);
    } catch (error) {
      console.error('Error suggesting combos:', error);
      toast({
        variant: 'destructive',
        title: t('comboSuggestion.errorTitle'),
        description: t('comboSuggestion.errorDescription'),
      });
    }
    setLoading(false);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="font-headline text-3xl">{t('comboSuggestion.title')}</h3>
        <p className="text-muted-foreground mt-2">
          {t('comboSuggestion.description')}
        </p>
        <Button onClick={handleSuggestCombos} disabled={loading} className="mt-4">
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Wand2 className="mr-2 h-4 w-4" />
          )}
          {loading ? t('comboSuggestion.buttonLoading') : t('comboSuggestion.button')}
        </Button>
      </div>

      {combos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {combos.map((combo, index) => (
            <ComboCard key={index} combo={combo} />
          ))}
        </div>
      )}
    </div>
  );
}
