import { supabase } from '@/lib/supabase';

export const uploadBill = async (file: File, consumerId: string) => {
  const fileName = `bills/${consumerId}/${Date.now()}-${file.name}`;
  
  const { data, error } = await supabase.storage
    .from('bills-and-readings')
    .upload(fileName, file);

  if (error) throw error;
  return data;
};

export const uploadMeterReading = async (file: File, meterId: string) => {
  const fileName = `readings/${meterId}/${Date.now()}-${file.name}`;
  
  const { data, error } = await supabase.storage
    .from('bills-and-readings')
    .upload(fileName, file);

  if (error) throw error;
  return data;
};

export const downloadBill = async (path: string) => {
  const { data, error } = await supabase.storage
    .from('bills-and-readings')
    .download(path);

  if (error) throw error;
  return data;
};

export const getBillUrl = async (path: string) => {
  const { data } = await supabase.storage
    .from('bills-and-readings')
    .getPublicUrl(path);

  return data.publicUrl;
};