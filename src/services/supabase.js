import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Müşterinin formdaki dosyasını Supabase bulutuna yükler
 * ve geriye o dosyanın kalıcı bağlantısını (URL) döner.
 */
export const uploadQuoteFile = async (file) => {
  if (!file) return null;

  try {
    // Türkçe karakter veya boşlukları temizleyerek rastgele eşsiz bir isim veriyoruz
    const fileExt = file.name.split('.').pop();
    const cleanName = file.name.replace(/[^a-zA-Z0-9-]/g, '_').substring(0, 20);
    const fileName = `${Date.now()}_${cleanName}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    // Dosyayı 'quotes' sepetine yükle
    const { data, error } = await supabase.storage
      .from('quotes')
      .upload(filePath, file, {
        cacheControl: '31536000',
        upsert: false
      });

    if (error) {
      console.error('Supabase Yükleme Hatası:', error.message);
      throw error;
    }

    // Yüklenen dosyanın herkese açık linkini al
    const { data: publicUrlData } = supabase.storage
      .from('quotes')
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
    
  } catch (error) {
    console.error('uploadQuoteFile metodunda hata:', error);
    throw error;
  }
};
